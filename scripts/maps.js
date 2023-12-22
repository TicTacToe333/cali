function getPlace(){
    document.getElementById("maps").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12171317864!2d-97.06120758846953!3d32.820809736224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b71dbcabc7%3A0x84402faed79e80f3!2sCarcosa%20Seri%20Negara%2C%20Perdana%20Botanical%20Gardens%2C%2050480%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1699740952569!5m2!1sen!2sus";
    
}

function getRandomUrl(urls) {
    var minIndex = 0;
    var maxIndex = urls.length - 1;
    var randomIndex = Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
    return urls[randomIndex];
}

var urls = [
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12171317864!2d-97.06120758846953!3d32.820809736224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b71dbcabc7%3A0x84402faed79e80f3!2sCarcosa%20Seri%20Negara%2C%20Perdana%20Botanical%20Gardens%2C%2050480%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1699740952569!5m2!1sen!2sus",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12171317864!2d-97.06120758846953!3d32.820809736224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b71dbcabc7%3A0x84402faed79e80f3!2sCarcosa%20Seri%20Negara%2C%20Perdana%20Botanical%20Gardens%2C%2050480%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1699740952569!5m2!1sen!2sus",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12171317864!2d-97.06120758846953!3d32.820809736224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b71dbcabc7%3A0x84402faed79e80f3!2sCarcosa%20Seri%20Negara%2C%20Perdana%20Botanical%20Gardens%2C%2050480%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1699740952569!5m2!1sen!2sus"];

var randomSelectedUrl = getRandomUrl(urls);

$("#hereComesTheIframeInto").html(
"<iframe class='random-iframe' src='" + randomSelectedUrl + "' width='100%' height='700' frameborder='0' scrolling='yes' seamless='seamless'></iframe>");