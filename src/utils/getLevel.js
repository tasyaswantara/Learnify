export function getLevel(percentage) {
  if (percentage <= 40) {
    return {
      label: 'Beginner',
      summary: 'Kamu perlu menguatkan fondasi frontend dari dasar.',
    }
  }

  if (percentage <= 75) {
    return {
      label: 'Intermediate',
      summary: 'Kamu sudah punya fondasi dan siap masuk materi lebih aplikatif.',
    }
  }

  return {
    label: 'Advanced',
    summary: 'Kamu siap mengerjakan tantangan frontend yang lebih kompleks.',
  }
}
