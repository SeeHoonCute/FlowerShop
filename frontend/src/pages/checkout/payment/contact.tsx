import { Table } from '@mantine/core';

const data = [
  ['Liên hệ', 'Nguyễn Trí'],
  ['SĐT', '0987654321'],
  ['lời nhắn', 'ship lúc 12h đêm nha'],
  ['Địa chỉ nhận:', 'Linh Trung, Thủ Đức'],
];

function Contact() {
  return (
    <Table>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
            <td><a href="/">Change</a></td>
          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default Contact;
