
export function bookFunction() {
    console.log("(|)")
    document.getElementById("bookbtn").onclick = function () {
        window.alert("We are working on this feature...");
        window.location.reload();
    }
}