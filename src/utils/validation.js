export const USER_STORAGE_KEY = 'learnify:user'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function normalizeWhatsApp(value) {
  const trimmed = value.trim()
  const numericValue = trimmed.replace(/[^\d+]/g, '')

  if (numericValue.startsWith('+62')) {
    return numericValue
  }

  if (numericValue.startsWith('62')) {
    return `+${numericValue}`
  }

  if (numericValue.startsWith('0')) {
    return `+62${numericValue.slice(1)}`
  }

  return numericValue
}

export function validateBiodata(values) {
  const errors = {}
  const normalizedWhatsApp = normalizeWhatsApp(values.whatsapp)

  if (!values.name.trim()) {
    errors.name = 'Nama wajib diisi.'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Nama minimal 3 karakter.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Format email belum valid.'
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = 'Nomor WhatsApp wajib diisi.'
  } else if (!/^\+628\d{7,13}$/.test(normalizedWhatsApp)) {
    errors.whatsapp = 'Gunakan format 08... atau +628...'
  }

  if (!values.targetProgram) {
    errors.targetProgram = 'Pilih target program.'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
    values: {
      email: values.email.trim().toLowerCase(),
      name: values.name.trim(),
      targetProgram: values.targetProgram,
      whatsapp: normalizedWhatsApp,
    },
  }
}
