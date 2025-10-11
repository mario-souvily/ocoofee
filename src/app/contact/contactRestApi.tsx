'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function ContactRestApi() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter();
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to_name: 'Mario',
          from_name: name,
          from_email: email,
          message: message,
        }),
      })
      const result = await response.json()
      if (!result.success) {
        throw new Error('Failed to send email')
      }

      router.push('/');
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h1 className="text-sky-800 text-2xl font-bold text-center mb-6">Contactez-moi</h1>
          <form onSubmit={sendEmail} className='space-y-4'>
            <input
              type="text"
              value={name}
              placeholder="Votre nom"
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              value={email}
              placeholder="Votre email"
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              value={message}
              placeholder="Votre message"
              onChange={e => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={6}
              required
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className=" bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white rounded-md p-2 w-full"
              >
                Envoyer
              </button>
              <button
                type="button"
                onClick={() => router.push('/')}
                className=" bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
              >
                Fermer
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

