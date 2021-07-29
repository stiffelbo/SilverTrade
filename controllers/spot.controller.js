const request = require('request');
const cheerio = require('cheerio');
const { response } = require('express');

const urlUSD = 'https://www.kitco.com/silver-price-today-usa/';

exports.getUsd = async (req, res) => {
  try {
    request(urlUSD, (err, resp, html) => {
      if(!err && resp.statusCode == 200){
          const $ = cheerio.load(html);
          const priceContainer = $('.table-price--body-table--overview-bid p:nth-child(2)');  
          const result = parseFloat(priceContainer.text());                           
          res.status(200).json({ spot : result});         
      }
    });    
  } catch (err) {
    res.status(500).json({ message : err });
  }
};