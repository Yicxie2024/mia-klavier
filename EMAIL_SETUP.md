# 邮件发送功能实现指南

## 概述

在 React 前端应用中发送邮件，通常有以下几种实现方式：

## 方案一：EmailJS（推荐 - 最简单）

**优点：**
- 无需后端服务器
- 免费套餐：每月 200 封邮件
- 配置简单，适合静态网站
- 直接从前端发送

**实现步骤：**

1. **安装依赖**
```bash
npm install @emailjs/browser
```

2. **注册 EmailJS 账号**
   - 访问 https://www.emailjs.com/
   - 注册账号并创建服务（Service）
   - 创建邮件模板（Template）
   - 获取 Public Key

3. **在代码中使用**
```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // EmailJS Service ID
      'YOUR_TEMPLATE_ID',     // EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_email: 'your-email@example.com', // 接收邮件的邮箱
      },
      'YOUR_PUBLIC_KEY'       // EmailJS Public Key
    )
    alert('Message sent successfully!')
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Failed to send message. Please try again.')
  }
}
```

## 方案二：后端 API + Nodemailer（Node.js）

**优点：**
- 完全控制
- 更安全（API Key 不暴露在前端）
- 支持更多邮件服务商

**实现步骤：**

1. **创建后端 API（Node.js + Express）**
```javascript
// server.js
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail', // 或其他服务
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
})

app.post('/api/send-email', async (req, res) => {
  const { name, email, inquiryType, message } = req.body
  
  try {
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com',
      subject: `New Contact: ${inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(3001, () => console.log('Server running on port 3001'))
```

2. **前端调用**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('Message sent successfully!')
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send message. Please try again.')
  }
}
```

## 方案三：第三方邮件服务（SendGrid, Mailgun, AWS SES）

**优点：**
- 专业邮件服务
- 高送达率
- 详细的分析和统计

**示例：SendGrid**

1. **后端实现**
```javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/api/send-email', async (req, res) => {
  const { name, email, inquiryType, message } = req.body
  
  const msg = {
    to: 'your-email@example.com',
    from: 'your-email@example.com',
    subject: `New Contact: ${inquiryType}`,
    text: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiryType}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Inquiry: ${inquiryType}</p><p>Message: ${message}</p>`
  }
  
  try {
    await sgMail.send(msg)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
```

## 推荐方案

对于静态网站（如 GitHub Pages），**推荐使用 EmailJS**，因为：
1. 无需后端服务器
2. 配置简单
3. 免费套餐足够个人使用
4. 安全性可接受（使用 Public Key）

## 安全注意事项

1. **EmailJS**: Public Key 会暴露在前端，但有限制功能
2. **后端 API**: 使用环境变量存储敏感信息
3. **防止垃圾邮件**: 添加 reCAPTCHA 验证
4. **速率限制**: 限制发送频率

## 下一步

1. 选择适合的方案
2. 按照步骤配置
3. 在 `Contact.tsx` 的 `handleSubmit` 函数中实现
4. 测试发送功能

