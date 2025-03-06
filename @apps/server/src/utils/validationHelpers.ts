export function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
  
export function validatePassword(password:string){
      const passwordPattern=/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/
      return passwordPattern.test(password)
  }