const exportBtn = document.querySelector('.export__btn');

exportBtn.addEventListener('click', function() {
    html2canvas(document.querySelector("#screen_bg")).then(canvas => {
        let filename = document.querySelector('.export__input').value;
        let fileType = document.querySelector('.custom-select__trigger span').innerText;
        if(filename != '') {
            if (fileType == 'SVG') {
                console.log('svg');
            } else {
                let imageURI = canvas.toDataURL(`image/${fileType.toLowerCase()}`);
                filename = `${filename}.${fileType.toLowerCase()}`;
                download(imageURI, filename, `image/${fileType.toLowerCase()}`);
            }
        } else {
            alert('Por favor, preencha o nome do arquivo antes de exportar');
        }
    });
});

// ref .:https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        let a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = data;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}    
