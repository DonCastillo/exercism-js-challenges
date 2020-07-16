//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


function nameProtein(codon){
  switch(codon){
    case 'AUG': 
      return 'Methionine';
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine';
    case 'UUA':
    case 'UUG':
      return 'Leucine';
    case 'UCU': 
    case 'UCC': 
    case 'UCA': 
    case 'UCG':
      return 'Serine';
    case 'UAU': 
    case 'UAC':
      return 'Tyrosine';
    case 'UGU': 
    case 'UGC':
      return 'Cysteine';
    case 'UGG':
      return 'Tryptophan';
    case 'UAA':
    case 'UAG': 
    case 'UGA':
      return 'STOP';
    default: 
      return 'INVALID';
  }
}

export const translate = (string = "") => {
  console.log(string);
  
  var protein = [];

  // only accepts string that is not empty and is divisible by 3
  if( string.length > 2 ) {
    
    // store all codons into proteins array
    var rna = [];
    for(let i = 0; i < string.length; i+=3){
      let codon = string.substr(i, 3)
      rna.push( codon );
    }

    // iterate through protein and fetch corresponding protein
    for(let i = 0; i < rna.length; ++i){
      let name = nameProtein(rna[i]);
      if( name !== 'STOP' && name !=='INVALID'){
        protein.push( name );
      } else if( name === 'INVALID'){
          throw new Error('Invalid codon');
      } else {
        break;
      }
    }
  } 

  return protein

};



