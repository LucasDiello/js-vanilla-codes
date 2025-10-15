import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

const items = document.querySelector('.products');
const ol = document.querySelector('.cart__products');
const totalPrice = document.querySelector('.total-price');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const createLoading = () => {
  const p = document.createElement('p');
  p.innerHTML = 'carregando...';
  p.className = 'loading';
  items.appendChild(p);
};

const removeLoading = () => {
  const loading = document.querySelector('.loading');
  return loading.remove();
};

const errorAPI = () => {
  const pError = document.createElement('p');
  pError.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  pError.className = 'error';
  items.appendChild(pError);
};

const listItens = async () => {
    try {
        const response = await fetchProductsList('computador');
        return response.forEach((iten) => {
            items.appendChild(
                createProductElement({
                    id: iten.id,
                    title: iten.title,
                    thumbnail: iten.thumbnail,
                    price: iten.price,
                }),
            );
        });
    } catch {
        errorAPI();
    }
};

const addCart = async () => {
    const btnAdd = document.querySelectorAll('.product__add');
    let total = 0;
    btnAdd.forEach((button) => {
        button.addEventListener('click', async (event) => {
            const getID = event.target.parentNode.querySelector('.product__id').innerHTML;
            const getPrice = event.target.parentNode.querySelector('.product__price__value')
            .innerHTML;
            const response = await fetchProduct(getID);
            ol.appendChild(
                createCartProductElement({
                    id: response.id,
                    title: response.title,
                    price: response.price,
                    pictures: response.pictures,
                }),
            );
            saveCartID(getID);
            total += parseFloat(getPrice);
            totalPrice.innerHTML = `${total.toFixed(2)}`;
            localStorage.setItem('totalPrice', total.toFixed(2));
        });
    });
};

const savedItensReloadPage = async () => {
    const cartIDs = getSavedCartIDs();
    cartIDs.forEach(async (id) => {
        const response = await fetchProduct(id);
        ol.appendChild(
            createCartProductElement({
                id: response.id,
                title: response.title,
                price: response.price,
                pictures: response.pictures,
            }),
        );
    });
};

const savedPriceReloadPage = () => {
    const total = localStorage.getItem('totalPrice');
    if (total) {
        totalPrice.innerHTML = `${total}`;
    }
};

async function load() {
    createLoading();
    await listItens();
    removeLoading();
  await addCart();
  await savedItensReloadPage();
  savedPriceReloadPage();
}

load();
