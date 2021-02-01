$(document).ready(function () {

	const url = 'http://167.172.184.73:1337/users'

	$('#showUsr').on('touchend', function () {
		$.get(url, function (data, status) {
			console.log(`${data[5].Ainm}`);
		})
	})
});