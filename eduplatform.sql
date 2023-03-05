-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2023 at 06:57 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eduplatform`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `division` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `address`, `city`, `district`, `division`, `country`, `status`, `userId`, `createdAt`) VALUES
(1, 'Road 6/A, Sector 5 dolipara', '', 'Dhaka', 'dhaka', 'Bangladesh', '0', 1, '2023-03-03 06:40:30'),
(2, 'Road 15, Adabor', '', 'Dhaka', 'Dhaka', 'Bangladesh', '0', 2, '2023-03-03 06:41:52'),
(3, 'Akran, Ashulia', '', 'Savar', 'Dhaka', 'Bangladesh', '0', 3, '2023-03-03 06:42:11'),
(4, 'Mirpur', '', 'Mirpur', 'Dhaka', 'Bangladesh', '0', 6, '2023-03-03 06:57:45');

-- --------------------------------------------------------

--
-- Table structure for table `eduinfo`
--

CREATE TABLE `eduinfo` (
  `id` int(11) NOT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `institute` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eduinfo`
--

INSERT INTO `eduinfo` (`id`, `degree`, `department`, `institute`, `status`, `createdAt`, `userId`) VALUES
(1, 'BSc', 'CSe', 'Eastern University', 1, '2023-03-03 16:40:34', 1),
(2, 'BSc', 'CSe', 'Eastern University', 0, '2023-03-03 16:34:05', 2),
(3, 'BSc', 'CSe', 'Eastern University', 0, '2023-03-03 16:34:09', 3),
(5, 'BSc', 'CSe', 'Eastern University', 0, '2023-03-03 16:41:12', 6);

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `topicSlug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `title`, `topicSlug`, `description`, `status`, `createdAt`, `count`) VALUES
(1, 'General Science', 'general-science', 'As a general science major, you\'ll study at least three of these fields — biology, chemistry, computer science, physics, and psychology — and do advanced work in one of them, plus a year of math. You\'ll gain confidence to pursue knowledge and ideas across disciplines, setting you up for professional success.', 0, '2023-03-03 05:28:28', 1),
(2, 'General Math', 'general-math', 'General Mathematics aims to develop learners\' understanding of concepts and techniques drawn from number and algebra, trigonometry and world geometry, sequences, finance, networks and decision mathematics and statistics, in order to solve applied problems', 0, '2023-03-03 05:29:20', 1),
(3, 'English', 'english', 'The English language is an Indo-European language in the West Germanic language group. Modern English is widely considered to be the lingua franca of the world and is the standard language in a wide variety of fields, including computer coding, international business, and higher education.', 0, '2023-03-03 05:30:22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `shortBio` text DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `lastLogin` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `status`, `firstName`, `LastName`, `phoneNumber`, `emailAddress`, `password`, `gender`, `dob`, `username`, `shortBio`, `role`, `photo`, `lastLogin`, `createdAt`) VALUES
(1, 0, 'Moinul', 'Islam', NULL, 'moinul.islam5749@gmail.com', 'U2FsdGVkX1+cwLwAT6Aa443UfB0VyJbjlRVl9M65CAc=', 'male', NULL, 'moinul02', NULL, 'admin', NULL, NULL, '2023-03-02 19:14:39'),
(2, 0, 'Tausif', 'Alam', NULL, 'tausif.study@gmail.com', 'U2FsdGVkX1/F/yVqsls8Volz2NVguGyrLw/zoOiepnM=', 'male', NULL, 'tausif02', NULL, 'student', NULL, NULL, '2023-03-02 18:06:17'),
(3, 0, 'Sumaiya', 'Fahmida', NULL, 'sumaiyaFahmida@gmail.com', 'U2FsdGVkX1/xoSQnvtzKbHnqnHLF2uqFMon+HbSNXHU=', 'female', NULL, 'sumaiya02', NULL, 'student', NULL, NULL, '2023-03-02 19:23:41'),
(6, 0, 'Sadia', 'Neer', NULL, 'sadianeer@gmail.com', 'U2FsdGVkX19tebqfKITk5gDj+gXB1SsZVvI3zDQZziU=', 'female', NULL, 'sadia02', NULL, 'student', NULL, NULL, '2023-03-03 06:42:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `eduinfo`
--
ALTER TABLE `eduinfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `eduinfo`
--
ALTER TABLE `eduinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `eduinfo`
--
ALTER TABLE `eduinfo`
  ADD CONSTRAINT `eduinfo_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
