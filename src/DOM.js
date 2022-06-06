/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let newTag = document.createElement(tag);
        newTag.innerHTML = content;
        document.body.append(newTag);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let n = 1;
    function newNode(n, childrenCount) {
        let newTag = document.createElement('div');
        newTag.classList.add('item_' + n);
        if (n < level) {
            for (let i = 0; i < childrenCount; i++) {
                newTag.appendChild(newNode(n + 1, childrenCount));
            }
        }
        return newTag;
    }
    return newNode(n, childrenCount);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let newTree = generateTree(2, 3);
    let secondLevelNode = newTree.getElementsByClassName('item_2');

    Array.from(secondLevelNode).forEach((element) => {
        let newSection = document.createElement('section');
        newSection.classList.add('item_2');

        let remainingChild = element.childNodes;
        Array.from(remainingChild).forEach((child) => {
            newSection.appendChild(child);
        });

        element.replaceWith(newSection);
    });

    return newTree;
}
