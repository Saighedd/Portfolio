<script>
function cb(response) {
document.getElementById('visits').innerText = response.value;
}
</script>
<script async src="https://api.countabc.xyz/hit/saighed.xyz/visits?callback=cb"> </script>
