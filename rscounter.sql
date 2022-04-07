-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 07, 2022 at 08:36 AM
-- Server version: 10.3.34-MariaDB-0+deb10u1
-- PHP Version: 7.3.31-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rscounter`
--
CREATE DATABASE IF NOT EXISTS `rscounter` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `rscounter`;

-- --------------------------------------------------------

--
-- Table structure for table `status_room`
--

CREATE TABLE `status_room` (
  `id` int(11) NOT NULL,
  `temp` double NOT NULL,
  `humid` double NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status_room`
--

INSERT INTO `status_room` (`id`, `temp`, `humid`, `time`) VALUES
(1, 26.7, 83.5, '2022-04-07 01:34:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `status_room`
--
ALTER TABLE `status_room`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `status_room`
--
ALTER TABLE `status_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
