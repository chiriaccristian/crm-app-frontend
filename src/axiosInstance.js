import axios from "axios";

//add default header with authorization FIFAToken only for development mode
const setAuth = () => {
    let env = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    let FIFAToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im8ybW1zIn0.eyJ0IjoidSIsInN1YiI6IjVlMzJjMWIyNWIyYzVjMDAwYTM2OWM4ZCIsImF1ZCI6ImNybWFwcHRlc3QiLCJzY29wZSI6WyJGSUZBX1BST0ZJTEVfUkVBRCJdLCJpYXQiOjE2MTU3OTkwNTcsImV4cCI6MTYxNjQwMzg1NywiaXNzIjoibW1zaS1kZXYifQ.Rs8iG08sFqJJ8cK4PYyYbPH0_oPPdJrQYSBdekz4dAjP8SpopUW81blbxH9OZOXnhTipviCEM5bWawZhU0sYZJDSlZg8rj3nu-mKNao9vgMU0Qr_MTSZnfXUpYzxDbhlQBucqbvBQnZpJfP3ITOoOEob2t2dktlcr0y-YSrMGH5ehdMpuU2iytx811q4V-AbXP6JsECrrnNxvjNzBNLLXiRkbq5-gInnqmIS-TJeG36h1a4GqsQRI9Y0ENlDQKsV8j8pFyuXeBcIo0E00WXV6R8lTlP5OugvCzzRSU0XmFTQiRnn6faYXVzc-n2gNHWJRI6ozJBLGektkKcYhmSjZA';
    return env ? {Authorization: `Bearer ${FIFAToken}`} : '';
};


const axiosInstance = axios.create({
    headers: {
        ...setAuth()
    }
});

export default axiosInstance;