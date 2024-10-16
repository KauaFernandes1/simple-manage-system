import React from 'react';
import * as PhosphorIcons from 'phosphor-react'; // Importando todos os ícones

// Mapeando os ícones para facilitar o acesso
const iconMap = {
  // Adicione os ícones que você deseja usar aqui
  'Money': PhosphorIcons.Money,
  'Info': PhosphorIcons.Info,
  'Receipt': PhosphorIcons.Receipt,
  'Barcode': PhosphorIcons.Barcode,
  // Você pode adicionar outros ícones conforme necessário
};

const Icon = ({ name, size = 24, color = 'currentColor' }) => {
  const SelectedIcon = iconMap[name]; // Selecionando o ícone baseado na prop `name`

  if (!SelectedIcon) {
    return null; // Retorna null se o ícone não estiver definido
  }

  return <SelectedIcon size={size} color={color} />;
};

export default Icon;
