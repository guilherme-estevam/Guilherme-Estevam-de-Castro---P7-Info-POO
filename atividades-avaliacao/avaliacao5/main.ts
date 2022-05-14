import {Cliente} from "./cliente"
import {TipoCliente} from "./tipo_cliente"
import {Produto} from "./produto"
import {NotaFiscal} from "./nota_fiscal"
import {ItemNotaFiscal} from "./item_nota_fiscal"

let cliente = new Cliente(1, "José Maria da Silva", 100, "200.345.987-11", TipoCliente.PESSOA_FISICA);

let p1 = new Produto(1, 150, "Arroz Tio Joao", 8);
let p2 = new Produto(2, 200,"Feijão Janjão", 7);
let p3 = new Produto(3, 300, "Farinha da Boa", 5.5);

let itnf1 = new ItemNotaFiscal(1, 1, 10, p1);
let itnf2 = new ItemNotaFiscal(2, 2, 10, p2);
let itnf3 = new ItemNotaFiscal(3, 3, 10, p3);

let nf = new NotaFiscal(1, 201, cliente);

nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);
nf.adicionarItem(itnf3);

console.log(nf.imprimirNotaFiscal());