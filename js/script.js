// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Discordオンラインメンバー数の取得 (例)
    const discordOnlineMembersElement = document.getElementById('discord-online-members');
    const discordServerId = 'YOUR_DISCORD_SERVER_ID'; // 実際のサーバーIDに置き換えてください

    if (discordOnlineMembersElement && discordServerId) {
        // 注意: このDiscordウィジェットAPIはCORS制限があるかもしれません。
        // うまく動作しない場合は、サーバーサイドで取得するか、より確実な方法を検討してください。
        // また、公開ウィジェットをiframeで埋め込む方が簡単な場合もあります。
        fetch(`https://discord.com/api/guilds/${discordServerId}/widget.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.presence_count) {
                    discordOnlineMembersElement.textContent = data.presence_count;
                } else {
                    discordOnlineMembersElement.textContent = 'N/A'; // データがない場合
                }
            })
            .catch(error => {
                console.error('Error fetching Discord data:', error);
                discordOnlineMembersElement.textContent = 'Error'; // エラー表示
            });
    }

    // ナビゲーションのドロップダウンメニューの簡単な制御 (CSSでも実現可能)
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        // モバイル対応など、より複雑な動作は追加のJSが必要
    });
});