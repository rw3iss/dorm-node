// Dorm Models library

module.exports = {
	Exceptions: {

		ArgumentException: function(msg) {
			return {
				name: "ArgumentException",
				message: msg
			}
		},

		DatabaseException: function(msg) {
			//todo: log exception
			return { 
				name: "DatabaseException",
				message: msg
			};
		}

	}
}