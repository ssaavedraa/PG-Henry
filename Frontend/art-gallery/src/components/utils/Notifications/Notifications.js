import Swal from "sweetalert2";
import "./ButtonsStyles.css";



export function confirmationSweet(name,execute,closeModal,isEdit,isArtist){

  const detail = isArtist === true ? "artist" : "painting";

  const edit = {
    title : 'Are you sure to change the data?',
    text : `You are trying to change the ${detail}'s data `,
    success: 'Your entry has been added.'
  }
  const add ={
    title : `Are you sure to add ${detail}?`,
    text : `You are trying to add a new ${detail}`,
    success : 'Your entry has been updated.'
  }

  const confirmationAdd = Swal.mixin({
      customClass: {
        confirmButton: "btnSweet success",
        cancelButton: "btnSweet danger",
      },
      buttonsStyling: false,
    });

    confirmationAdd.fire({
      title: isEdit === true ? edit.title.concat(name) : add.title,
      text: isEdit === true ? edit.text : add.text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: isEdit === true ? "Yes, edit it!" :'Yes, add it!',
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        execute();
        Swal.fire(
          isEdit === true ? 'Updated!' :'Added!',
          isEdit === true ? edit.success : add.success,
          'success'
        )
      }
      closeModal();
    })
}



export function deleteConfirmation() {
  const confirmationDelete = Swal.mixin({
    customClass: {
      confirmButton: "btnSweet success",
      cancelButton: "btnSweet danger",
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
