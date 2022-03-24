import Swal from "sweetalert2";
import "./ButtonsStyles.css";

export function confirmationSweet(
  name,
  execute,
  closeModal,
  isEdit,
  isArtist,
  isTech,
  isReview
) {
  let detail =
    isArtist === true ? "artist" : isTech === true ? "Technique" : "painting";

  if (isReview) detail = "review";

  const edit = {
    title: "Are you sure you want to change the data?",
    text: `You are trying to change the ${detail}'s data `,
    success: "Your entry has been added.",
  };
  const add = {
    title: `Are you sure you want to add a new ${detail}?`,
    text: `You are trying to add a new ${detail}`,
    success: "Your entry has been updated.",
  };

  const confirmationAdd = Swal.mixin({
    customClass: {
      confirmButton: "btnSweet success",
      cancelButton: "btnSweet danger",
    },
    buttonsStyling: false,
  });

  confirmationAdd
    .fire({
      title: isEdit === true ? edit.title.concat(name) : add.title,
      text: isEdit === true ? edit.text : add.text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: isEdit === true ? "Yes, edit it!" : "Yes, add it!",
      cancelButtonText: "No, cancel!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        execute();
        Swal.fire(
          isEdit === true ? "Updated!" : "Added!",
          isEdit === true ? edit.success : add.success,
          "success"
        );
      }
      closeModal();
    });
}

export function deleteConfirmation() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
}

/*Usuarios */
