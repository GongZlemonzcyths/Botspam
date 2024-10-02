const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    // ฟังก์ชันที่ใช้ส่งข้อความในลูป
    const sendMessageInLoop = () => {
        const channel = client.channels.cache.get('1289891303236309044'); // ใส่ Channel ID ตรงนี้
        if (channel) {
            channel.send('<@876344939531890738> kai');
        } else {
            console.log('ไม่พบ channel ที่ต้องการ');
        }
    };

    // ตั้งค่าให้ส่งข้อความทุกๆ 10 วินาที (10000 มิลลิวินาที)
    setInterval(sendMessageInLoop, 2500);
});

client.login(process.env.TOKEN);