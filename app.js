
const button = document.getElementById("button");

button.addEventListener("click", async () => {
	await window.mcwsApi.sammon();
})