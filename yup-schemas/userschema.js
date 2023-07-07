import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	ipAddress: Yup
		.string()
		.required('IP Address is required')
		.matches(
			/^(?:(?:^|\.)(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){4}$/,
			'Invalid IP Address'
		),
	selectedValue: Yup.string().required('Please select an Agent.'),

});
