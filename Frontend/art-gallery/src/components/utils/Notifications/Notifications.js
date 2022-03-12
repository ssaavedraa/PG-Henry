import Swal from "sweetalert2";
import "./ButtonsStyles.css";



export function addConfirmation(){
  const confirmationAdd = Swal.mixin({
      customClass: {
        confirmButton: "btn success",
        cancelButton: "btn danger",
      },
      buttonsStyling: false,
    });

    confirmationAdd.fire({
      title: 'Are you sure?',
      text: "You can revert changes to edit!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, add it!',
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Added!',
          'Your entry has been added.',
          'success'
        )
      }
    })
}



export function deleteConfirmation() {
  const confirmationDelete = Swal.mixin({
    customClass: {
      confirmButton: "btn success",
      cancelButton: "btn danger",
    },
    buttonsStyling: false,
  });

  confirmationDelete
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
        confirmationDelete.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        confirmationDelete.fire(
          "Cancelled",
          "Your file is safe!",
          "error"
        );
      }
    });
}
