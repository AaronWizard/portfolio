import axios from 'axios';

const resumePath = 'data/resume.json';

export const loadResume = () => {
	return axios.get(resumePath).then(resp => resp.data);
};
