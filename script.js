document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("purchaseForm");
  const toastEl = document.getElementById("successToast");

  if (form && toastEl) {
    const toast = new bootstrap.Toast(toastEl, { delay: 7000 }); // уведомление исчезнет через 7 сек

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const modal = bootstrap.Modal.getInstance(document.getElementById("purchaseModal"));
      modal.hide(); // закрываем модалку
      toast.show(); // показываем уведомление
      form.reset(); // очищаем поля
    });
  }
});