import { formatDate } from 'Helpers';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map((item, idx) => (
          <Tr key={item.id}>
            <Td>{idx + 1}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{formatDate(item.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
