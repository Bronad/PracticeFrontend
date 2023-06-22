const fields = [];
for(i = 0; i < 9; i++){
    const field = {
        IDD : `${i}`,
        tagged_by_blue : false,
        tagged_by_red : false
    };
    fields.push(field);
}
console.log(fields);

function renderfield(){
    let htmlString = '';
    let rbpick = '';
    fields.forEach((value, index) => {
        if(value.tagged_by_blue){rbpick = 'blue';
            }else if(value.tagged_by_red){rbpick = 'red';
            }
        htmlString += `<button class='field ${rbpick}'></button>`
        if(index % 3 == 0){htmlString += `\n`}
    });
    console.log(htmlString);
    document.querySelector('.js-field').innerHTML = htmlString;
}