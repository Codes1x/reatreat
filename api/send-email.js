import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, phone } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `"Форма сайта" <${process.env.MAIL_USER}>`,
      to: 'nf060906@gmail.com',
      subject: 'Новое сообщение с сайта',
      html: `
        <h3>Новое сообщение с формы обратной связи</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон / WhatsApp:</strong> ${phone}</p>
      `
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Ошибка отправки письма:', err)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
}
