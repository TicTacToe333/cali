let master_username = "AndrewTurner";
let master_password = "carcosa1642";
let next_page = "./solution.html";
let wrong_answer = "./tryagain.html";

function checkPassword() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username);
    console.log(password);
    // let result = add(addend1, addend2);
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    if (username == master_username && password == master_password){
        window.location.href=next_page;
    }else{
        window.location.href=wrong_answer;
    }
}

// Florida
// Tatoos
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12171317864!2d-97.06120758846953!3d32.820809736224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7659cfd7f8311%3A0xf52ec3ff41ca66a8!2sCarcosa%20Tattoos!5e0!3m2!1sen!2sus!4v1699740868234!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

// New York 
// Club/game store
// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4360.3867569106915!2d-73.95741442016455!3d40.7323400081783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25be768b63a11%3A0x9fe251e008df2604!2sThe%20Carcosa%20Club!5e0!3m2!1sen!2sus!4v1693535543456!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

// Malaysia
// Actual hotel!
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12171317864!2d-97.06120758846953!3d32.820809736224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b71dbcabc7%3A0x84402faed79e80f3!2sCarcosa%20Seri%20Negara%2C%20Perdana%20Botanical%20Gardens%2C%2050480%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1699740952569!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

// Sweden
// Might be someone's house
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.603442668535!2d14.69685339176785!3d57.65522779990721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a030a4368da29%3A0xe3dfdc869d6e4c5f!2sCarcosa%20Ab!5e0!3m2!1sen!2sus!4v1699741363382!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>