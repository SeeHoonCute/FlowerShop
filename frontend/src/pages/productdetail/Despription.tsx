import {
  Container,
  Paper,
  Text,
} from "@mantine/core";

function Despription() {
return (
  <Container size="lg" pt="3rem">
  <Paper shadow="xs" radius="0" p="md">
      <Text style={{ marginBottom: '20px' }}
      variant="gradient"
      gradient={{ from: 'red', to: 'cyan', deg: 45 }}
      sx={{ fontFamily: 'Jost' }}
      ta="left"
      size={40}
      fs="italic"
      fw={700}>MÔ TẢ</Text>
    <Text style={{ marginBottom: '10px' }}
    variant="gradient"
    gradient={{ from: 'black', to: 'cyan', deg: 45 }}
    sx={{ fontFamily: 'Jost' }}
    ta="left"
    size={25}
    fs="italic">
    Why roses become a meaningful gift on Valentine's Day?
    </Text>
    <Text style={{ marginBottom: '20px' }}
    variant="gradient"
    gradient={{ from: 'black', to: 'cyan', deg: 5 }}
    sx={{ fontFamily: 'Jost' }}
    ta="left"
    size={16}
    fs="italic"
    c="dimmed">
    Roses originate from Persia and are the type to symbolize eternal love, noble and deep affection.
The story of the rose tells that the "Goddess of Love" was born with a white rose. When her husband died, she was so sad that she let the thorns of the rose pierce her hands, and blood fell on those roses.
Since then the roses have become red because of the blood of the goddess. I don't know since when rose became a symbol of love, bright red roses say "Love is sweet forever".
    </Text>
  </Paper>

  </Container>
);
}

export default Despription
