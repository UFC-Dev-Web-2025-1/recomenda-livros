"use client";

import React from 'react';
import styles from './footer.module.css';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box className={styles.footerItem}  >
        <span className={styles.forumBadge}>32</span>
          <Link href="/Forum">Fóruns</Link>
        
      </Box>
      <Box className={styles.footerItem}>
        Recomendações
      </Box>
    </footer>
  );
}



