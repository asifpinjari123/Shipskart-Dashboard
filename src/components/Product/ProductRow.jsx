import React from 'react';

const ProductRow = ({ name, subcategory, code }) => (
  <tr>
    <td className="py-2 px-4 border">{name}</td>
    <td className="py-2 px-4 border">{subcategory}</td>
    <td className="py-2 px-4 border">{code}</td>
    <td className="py-2 px-4 border">Unit - Pack Size</td>
    <td className="py-2 px-4 border">Quantity</td>
  </tr>
);

export default ProductRow;
