import React from 'react';
import * as PhosphorIcons from 'phosphor-react';

const iconMap = {
  Money: PhosphorIcons.Money,
  Info: PhosphorIcons.Info,
  Recibo: PhosphorIcons.Receipt,
  BarraDeCodigo: PhosphorIcons.Barcode,
  Casa: PhosphorIcons.House,
  Grafico: PhosphorIcons.ChartPie,
  Usuarios: PhosphorIcons.Users,
  Notificacao: PhosphorIcons.BellRinging,
  Configuracao: PhosphorIcons.Gear,
  Cofre: PhosphorIcons.Vault,
};

const Icon = ({ name, size = 24, color = 'currentColor' }) => {
  const SelectedIcon = iconMap[name];
  return SelectedIcon ? <SelectedIcon size={size} color={color} /> : null;
};

export default Icon;
