import Swal from "sweetalert2";

export const successMsg = (success, msg) => {
  if (success) {
    Swal.fire({
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const ErrorMsg = (error, msg) => {
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...!",
      text: msg,
    });
  }
};

export const loadingStatus = (loading) => {
  if (loading) return <div className="alert alert-info">Loading...</div>;
};
