const onClickAdd = () => {
    // 入力されたテキストを取得する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createTodoList(inputText);
};

// 要素の削除（TODOリスト）
const deleteList = (target) => {
    document.getElementById("todo-list").removeChild(target);
};

// 要素の削除（DONEリスト）
const deleteDoneList = (target) => {
    document.getElementById("done-list").removeChild(target);
};

// 未完了リストに追加する関数
const createTodoList = (text) => {
    // divの生成
    const div = document.createElement("div");
    div.className = "list";

    // pの生成
    const p = document.createElement("p");
    p.innerText = text;


    // 完了ボタンの生成
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "完了";
    doneBtn.addEventListener("click", () => {
        // 押されたらdivを削除する
        deleteList(deleteBtn.parentNode);

        // 完了リストに追加
        const addTarget = deleteBtn.parentNode

        // TODOリストのテキストを取得
        const text = addTarget.firstElementChild.innerText;

        // div以下を消去
        addTarget.textContent = null;

        // liの生成
        const li = document.createElement("p");
        li.innerText = text;

        // 戻すボタンの生成
        const backBtn = document.createElement("button");
        backBtn.innerText = "戻す";
        backBtn.addEventListener("click", () => {
            // 押されたらdivを削除する
            deleteDoneList(backBtn.parentNode);
            // テキストを取得
            const text = backBtn.parentNode.firstElementChild.innerText;
            // TODOリストに追加
            createTodoList(text);
        });

        // divの中に各要素を入れる
        addTarget.appendChild(p);
        addTarget.appendChild(backBtn);

        // 完了リストに追加
        document.getElementById("done-list").appendChild(addTarget);
    });


    // 削除ボタンの生成
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "削除";
    deleteBtn.addEventListener("click", () => {
        // 押されたらdivを削除する
        deleteList(deleteBtn.parentNode);
    });

    // div内に要素をいれる
    div.appendChild(p);
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);

    // 未完了リストに追加
    document.getElementById("todo-list").appendChild(div);
}

document
    .getElementById("add-btn")
    .addEventListener("click", () => onClickAdd());