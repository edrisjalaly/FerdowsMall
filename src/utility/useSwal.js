import Swal from 'sweetalert2'

export function useSwal() {
  const showAlert = async (Options) => {
    await Swal.fire(Options)
  }

  const showSuccess = async (message) => {
    return await showAlert({
      title: 'sure',
      text: message,
      icon: 'success',
      position: 'top-center',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const showError = async (message) => {
    return await showAlert({
      title: 'sure',
      text: message,
      icon: 'failed',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const showConfirm = async (message) => {
    return await showAlert({
      title: 'sure',
      text: message,
      icon: 'success',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return { showSuccess, showConfirm, showError }
}
