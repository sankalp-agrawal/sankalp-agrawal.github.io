function close_window() {
  if (confirm("Close Window?") == true) {
    close();
  }
}
$("#easy").on("click", close_window());