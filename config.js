const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙽𝙰𝙳𝙴𝙴𝙽-𝙼𝙳=il4HnKLR#rIfA5lx71YLLPRLUBCYZaLU3zAgfZ9BEsiAdGhZ9-xU' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'nadeenmd' : process.env.SESSION_NAME
};
