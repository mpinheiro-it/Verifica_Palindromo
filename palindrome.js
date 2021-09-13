function palindrome(str) {
  //Remove caracteres não alfanuméricos e converte tudo para lowercase
  str = str.replace(/[\W_]+/g, "").toLowerCase()
  
  //variável do resultado
  let result = true
  
  //iterando sobre cada caractere da string e comparando ao que está em sua posição correspondente de trás pra frente 
  for (let i = 0; i < str.length; i++){    
      if (str[i] == str.charAt([str.length - (i+1)])){    
        result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

console.log(palindrome("almostomla"));
