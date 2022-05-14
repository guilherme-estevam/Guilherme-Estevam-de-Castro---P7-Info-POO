"use strict";
exports.__esModule = true;
var cliente_1 = require("./cliente");
var tipo_cliente_1 = require("./tipo_cliente");
var produto_1 = require("./produto");
var nota_fiscal_1 = require("./nota_fiscal");
var item_nota_fiscal_1 = require("./item_nota_fiscal");
var cliente = new cliente_1.Cliente(1, "José Maria da Silva", 100, "200.345.987-11", tipo_cliente_1.TipoCliente.PESSOA_FISICA);
var p1 = new produto_1.Produto(1, 150, "Arroz Tio Joao", 8);
var p2 = new produto_1.Produto(2, 200, "Feijão Janjão", 7);
var p3 = new produto_1.Produto(3, 300, "Farinha da Boa", 5.5);
var itnf1 = new item_nota_fiscal_1.ItemNotaFiscal(1, 1, 10, p1);
var itnf2 = new item_nota_fiscal_1.ItemNotaFiscal(2, 2, 10, p2);
var itnf3 = new item_nota_fiscal_1.ItemNotaFiscal(3, 3, 10, p3);
var nf = new nota_fiscal_1.NotaFiscal(1, 201, cliente);
nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);
nf.adicionarItem(itnf3);
console.log(nf.imprimirNotaFiscal());