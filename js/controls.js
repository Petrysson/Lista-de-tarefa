let accountant = 0; //contador
let inputTask = document.getElementById('input_Task');
let button_add = document.getElementById('button_add');
let main =  document.getElementById('list_area');

function addTask() {
    //pegando o valor digitado
    let value_input = inputTask.value;

    //se não for vazio, nem nulo, nem indefinido
    if ((value_input !== "") && (value_input !== null) && (value_input !== undefined)) {

        ++accountant;

        let new_item = `
    <div id="${accountant}" class="item">
            
        <div onclick="markTask(${accountant})" class="icon_item">
            <i id="icon_${accountant}" class="mdi mdi-circle-outline"></i>
        </div><!-- FINAL DIV ICON_ITEM-->

        <div onclick="markTask(${accountant})" class="item_name">
            ${value_input}
        </div><!-- FINAL DIV ITEM_NAME-->

        <div class="item_btn">
            <button onclick="deletar(${accountant})" class="delete">
                <i class="mdi mdi-delete"></i>
                Deletar
            </button>
        </div> <!-- FINAL DIV ITEM_BTN-->

    </div> <!-- FINAL DIV ITEM-->
`

//adicionando o novo item no main
main.innerHTML += new_item;

//após adicionar, eu quero que limpe o valor dentro do input
inputTask.value = '';
inputTask.focus();
    }
}


//função para deletar as tarefas
function deletar(id){
    //variável tarefa
    let task = document.getElementById(id)
    task.remove();
}


//função para marcar a tarefa quando concluida
function markTask(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if(classe == 'item'){
        item.classList.add('Clicked');

        let icon = document.getElementById('icon_' + id)
        icon.classList.remove('mdi-circle-outline');
        icon.classList.add('mdi-checkbox-marked-circle-outline');

        item.parentNode.appendChild(item);
        
    } else {
        item.classList.remove('Clicked');

        let icon = document.getElementById('icon_' + id)
        icon.classList.remove('mdi-checkbox-marked-circle-outline');
        icon.classList.add('mdi-circle-outline');
    }
}

//quando o usuário teclar "ENTER" adicione uma tarefa também
inputTask.addEventListener('keyup', function(e){

    //se teclou "ENTER" (13)
    if(e.keyCode === 13){
        e.preventDefault();
        button_add.click();
    }
})
