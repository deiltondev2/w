let handler = function (m) {
  this.sendContact(m.chat, '556696159143', 'Deilton', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
