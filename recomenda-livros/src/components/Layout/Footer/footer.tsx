"use client";

import React from 'react';
import styles from './footer.module.css';
import { Box } from '@mui/material';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box className={styles.footerItem}>
        <span className={styles.forumBadge}>32</span>
        Fóruns
      </Box>
      <Box className={styles.footerItem}>
        Recomendações
      </Box>
    </footer>
  );
}



