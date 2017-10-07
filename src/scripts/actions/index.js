export const changeTheme = (theme) => {
  return {
    type: 'CHANGE_THEME',
    theme
  }
}

export const getHosts = () => {
	var hosts = firebase.database().ref('hosts/');
        hosts.once('value', function(snapshot) {
        let hostList = snapshot.val();
        return {
			type: 'GET_HOSTS',
			hostList
		}
    });
	
}
