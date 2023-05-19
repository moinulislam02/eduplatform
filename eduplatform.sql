-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2023 at 06:23 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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

-- --------------------------------------------------------

--
-- Table structure for table `classroom`
--

CREATE TABLE `classroom` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `classType` varchar(255) DEFAULT NULL,
  `classBio` text DEFAULT NULL,
  `verificationCode` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `adminId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `postId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `Title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `spam_Count` int(11) DEFAULT NULL,
  `likeCount` int(11) DEFAULT NULL,
  `commentCount` int(11) DEFAULT NULL,
  `shareCount` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `classroomIdentity` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `Title`, `description`, `photo`, `video`, `spam_Count`, `likeCount`, `commentCount`, `shareCount`, `status`, `userId`, `classroomIdentity`, `createdAt`) VALUES
(3, NULL, '<p><strong>Next.js+Prisma</strong> জাভাস্ক্রিপ্ট ফুলস্ট্যাক ডেভেলপমেন্টে বিশ্লেষণ ?<br>✴️ প্রথমেই বলি <strong>Next.js</strong> এর সাথে Prisma কে যুক্র করার কারন- এর অফিসিয়াল ডকুমেন্টেশন। ডাটাবেজ অপারেশনের ক্ষেত্রে ডকুমেন্টেশনে সাজেস্টেড।<br>✴️ <strong>Next.js</strong> একটি ফ্রেমওয়ার্ক এর মধ্যে <strong>Front-End,Back-End</strong> সফটওয়্যার ডেভেলপমেন্ট এর কমপ্লিট সাইকেল সাজানো আছে। আলাদা ডেভেলপমেন্ট প্যারা দূর হয়ে যাবে।<br>✴️ শুধু মাত্র React Front End থেকে Confidential API যেমন SMS, Payment, B2B, Confidential Micro Service গুলো Call করা সম্ভব নয়, ভুলেও কেউ Call করে থাকলে, সেটা সিকিউর নয়। যে API গুলো Next.js এর Server-Side সুবিধা থেকে সরাসরি সিকিউর Call করা যাবে।<br>✴️ CSRF, XSRF, Cookies ইত্যাদি Application সিকিউরিটি নিয়ে কাজ করা একেবারে সহজ হয়ে যাবে। যে ফিচার গুলো Laravel, ASP-Net এর মধ্যে সহজে পাওয়া যায়।<br>✴️ Next.js এর মধ্যে একই সাথে CSR,SSR এর কম্বিনেশন - ডেভেলপমেন্ট+পারফর্মেন্স এ নতুন একটা যুগের সুচনা।<br>???? Prisma এর বিষয়ে যদি বলি, শুরুতে বলবো Single Code Base স্কিমা, কুয়েরি যে ডাটাবেজের সাথে খুশি যুক্ত করা যাবে। হোক সেটা MySQL,SQLite, PostgreSQL, MSSQL - মানে আপনার এপ্লিকেশন যে কোনও ডাটাবেজ সিস্টেমের সাথে উপযোগী হয়ে গেলে। যে ফিচারটি Laravel এর ব্যাপক ব্যাবহারের অন্যতম একটি কারন।<br>???? Prisma Migration ফিচারে পুরো এপ্লিকেশনের জন্য যেভাবে দরকার- রিলেশন,জয়েন,কনসিস্টেন্সি সব কিছু ডাটাবেজে ম্যানেজ করা যায়। যেটা সহজ কথায় Laravel Migration ফিচারের সমান পাওয়ার ফুল।<br>???? Prisma Client ফিচারে - সিম্পল থেকে কমপ্লেক্স, ট্রানজেকশন-রোল ব্যাক সব ধরনের ডাটাবেজ অপারেশন সম্ভব। যেটা Laravel ORM-Query Builder ফিচারের সমান।<br>???? Live Deploy এর ক্ষেত্রে যদি আসি, এই কম্বিনেশনটি Shared hosting থেকে শুরু করে VPS সব খানে Deploy এবং Install সম্ভব।<br>???? এবার লাইব্রেরী ও প্যাকেজের বিষয়ে আসিঃ NPM এবং Yarn এর যত Front-End,Back-End প্যাকেজ আছে , হোক সেটা Express JS , React.js, কিংবা Tensorflow কিংবা অন্য কিছু। সব ধরনের প্যাকেজ/লাইব্রেরী Next.js এর সাথে ব্যাবহার করা যাবে।</p>', '345851629_199755656215590_1592150222302441000_n.jpg', NULL, NULL, 0, 0, 0, '0', 29, NULL, '2023-05-13 02:35:34'),
(4, NULL, '<p><strong>Next.js</strong> মোটেও নতুন কোনও ফ্রেমওয়ার্ক নয়। React আসে 2013 সালে , তার মাত্র ৩ বছর পর ২০১৬ সালে আসে Next.js. দীর্ঘ ৭ বছরের যাত্রায় এটি কমপ্লিটলি স্ট্যাবাল এবং হাই প্রোডাকশন গ্রেড একটি ফ্রেমওয়ার্ক। Next.js আরও আগেই আলোচনায় আসা উচিত ছিলো। কিন্তু আলোচনা শুরু হলো React যখন অফিসিয়ালি Next.js কে সাজেষ্ট করলো।</p><p>✴️ Next.js একটি ফ্রেমওয়ার্ক এর মধ্যে Front-End,Back-End সফটওয়্যার ডেভেলপমেন্ট এর কমপ্লিট সাইকেল সাজানো আছে। আলাদা ডেভেলপমেন্ট প্যারা দূর হয়ে যাবে।</p><p>✴️ শুধু মাত্র React Front End থেকে Confidential API যেমন SMS, Payment, B2B, Confidential Micro Service গুলো Call করা সম্ভব নয়, ভুলেও কেউ Call করে থাকলে, সেটা সিকিউর নয়। যে API গুলো Next.js এর Server-Side সুবিধা থেকে সরাসরি সিকিউর Call করা যাবে।</p><p>✴️ CSRF, XSRF, Cookies ইত্যাদি Application সিকিউরিটি নিয়ে কাজ করা একেবারে সহজ হয়ে যাবে। যে ফিচার গুলো Laravel, ASP-Net এর মধ্যে সহজে পাওয়া যায়।</p><p>✴️ Next.js এর মধ্যে একই সাথে CSR,SSR এর কম্বিনেশন - ডেভেলপমেন্ট+পারফর্মেন্স এ নতুন একটা যুগের সুচনা।</p><p>✴️ Live Deploy এর ক্ষেত্রে যদি আসি, এই কম্বিনেশনটি Shared hosting থেকে শুরু করে VPS সব খানে Deploy এবং Install সম্ভব।</p><p>✴️ এবার লাইব্রেরী ও প্যাকেজের বিষয়ে আসিঃ NPM এবং Yarn এর যত Front-End,Back-End প্যাকেজ আছে , হোক সেটা Express JS , React.js, কিংবা Tensorflow কিংবা অন্য কিছু। সব ধরনের প্যাকেজ/লাইব্রেরী Next.js এর সাথে ব্যাবহার করা যাবে।</p>', '345622609_907255847231162_2659861585471430533_n.jpg', NULL, NULL, 0, 0, 0, '0', 29, NULL, '2023-05-13 02:37:51'),
(5, NULL, '<p>নতুন আপডেটে আপনি React এর যে বিষয় গুলো Study করে Next.JS এ যাবেন<br># এই নোটটি অফিসিয়াল ডকুমেন্টেশন এ অনুসারে লেখা হয়েছে।</p>', '345840989_774027307689899_8001984499155156135_n.jpg', NULL, NULL, 0, 0, 0, '1', 29, NULL, '2023-05-13 02:41:34'),
(6, NULL, '<figure class=\"image\"><img src=\"https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/345632791_3499258840363115_8430086555003450089_n.png?stp=dst-jpg&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=825194&amp;_nc_ohc=jGwzt0DCBuEAX9LqcX9&amp;_nc_ht=scontent.fdac27-2.fna&amp;oh=00_AfBMtUzAA64xFCj8rCerUjiBH-N6qe1JNSX3DG1h0rrPaw&amp;oe=64640C5B\" alt=\"May be a graphic of text that says &quot;React srelatively un-opin ionated about how you build and structure your applications. There are multiple ways to build applications with React. NEXT.JS .JS The React ramework for the Web Next.js provides application. framework to structure your And optim izations that elp make both the development process and final application faster. Next.js included compl ete journey to develop full stack web application.&quot;\"></figure><p>Next.js Community Bangladesh&nbsp;<br>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation<br>&nbsp;</p>', NULL, NULL, NULL, 0, 0, 0, '0', 30, NULL, '2023-05-13 02:55:42'),
(7, NULL, '<p>???? ???????????????? ???????????????????????????????????????? ???????????????????????? ???????????????????????????? ???????????????????????????????????????? ???????????????? ????<br>⬇ JavaScript is a popular programming language used for both front-end and back-end development. Here are some important methods in the JavaScript String object that you may find useful:</p><p>???? ???????????????????????? Ch Bappy for more web development, Programming tips, tricks, and job opportunities.</p><p>???? ???????????? ????????????????????????: @Manish Kumar Shah<br>???? Get started with web development at W3Schools.com????</p><figure class=\"image\"><img src=\"https://media.licdn.com/dms/image/D5622AQF0F_llP72Sjg/feedshare-shrink_1280/0/1683918162991?e=1686787200&amp;v=beta&amp;t=UYaIymXezrVQGIq1KlSPZJxvoqtnm0DjMkxbSwo5Kt0\" alt=\"text\"></figure><figure class=\"image\"><img src=\"https://media.licdn.com/dms/image/D5622AQF0F_llP72Sjg/feedshare-shrink_1280/0/1683918162991?e=1686787200&amp;v=beta&amp;t=UYaIymXezrVQGIq1KlSPZJxvoqtnm0DjMkxbSwo5Kt0\" alt=\"text\"></figure><figure class=\"image\"><img src=\"https://media.licdn.com/dms/image/D5622AQF0F_llP72Sjg/feedshare-shrink_1280/0/1683918162991?e=1686787200&amp;v=beta&amp;t=UYaIymXezrVQGIq1KlSPZJxvoqtnm0DjMkxbSwo5Kt0\" alt=\"text\"></figure>', '1683918162991.jpg', NULL, NULL, 0, 0, 0, '0', 31, NULL, '2023-05-13 04:22:06'),
(8, NULL, '<p><strong>Share your knowledge now...</strong></p>', '345851629_199755656215590_1592150222302441000_n.jpg', NULL, NULL, 0, 0, 0, '0', 35, NULL, '2023-05-13 05:40:38');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `count`, `createdAt`, `status`) VALUES
(1, 'boimela-2022', 1, '2023-03-10 08:59:26', 0),
(2, 'boimela-2023', 2, '2023-03-10 08:59:36', 0),
(3, 'mathfest-2023', 3, '2023-03-10 08:59:52', 0),
(4, 'sciencefest-2023', 4, '2023-03-10 09:00:08', 0),
(5, 'CSE-fest', 5, '2023-03-10 09:00:37', 0),
(6, 'EEE-fest', 6, '2023-03-10 09:00:59', 1),
(7, 'Business-fest', 0, '2023-04-08 06:10:20', 0);

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
(29, 0, 'Moinul', 'Islam', NULL, 'web.moinul@gmail.com', 'U2FsdGVkX18FtT4NZK3rQ5+JYhom3TPHr1WsVFkbo+A=', 'male', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 02:32:28'),
(30, 0, 'Tausif', 'Alam', NULL, 'tausifalam.study@gmail.com', 'U2FsdGVkX1+irw9a6IGzMcVc5MxrhfqJ6W31OkYMVDc=', 'male', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 02:50:56'),
(31, 0, 'Sumaiya', 'Fahmida', NULL, 'sumaiyafahmida844@gmail.com', 'U2FsdGVkX18UdauIII4lXIy7O6mVxGIkwcPC0TujfVk=', 'female', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 04:19:28'),
(32, 0, 'Sadia', 'Neer', NULL, 'sadia.neer@gmail.com', 'U2FsdGVkX1+U5e8ggxwZxO3u5KALK7K9XXVXr6+aJ7U=', 'female', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 04:23:38'),
(33, 0, 'Zarmin', 'Riya', NULL, 'zarminriya5858@gmail.com', 'U2FsdGVkX1/dRRgUARe+nUyqvjwKzu7bxgw6LS3JMUg=', 'female', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 04:27:11'),
(34, 0, 'Sabrina', 'Arohi', NULL, 'sabrinaarohi11@gmail.com', 'U2FsdGVkX1+2fC03m0VdMrDru6CxEyL48DBmPZXFeLs=', 'female', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 04:28:35'),
(35, 0, 'Moinul', 'Islam', NULL, 'moinul.islam5749@gmail.com', 'U2FsdGVkX1/WeZAvZLI8C05eVGcsL76PrNlyE/Y4kUI=', 'male', NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-13 05:39:34');

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
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminId` (`adminId`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `postId` (`postId`);

--
-- Indexes for table `eduinfo`
--
ALTER TABLE `eduinfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `classroomIdentity` (`classroomIdentity`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `classroom`
--
ALTER TABLE `classroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `eduinfo`
--
ALTER TABLE `eduinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `classroom`
--
ALTER TABLE `classroom`
  ADD CONSTRAINT `classroom_ibfk_1` FOREIGN KEY (`adminId`) REFERENCES `user` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`);

--
-- Constraints for table `eduinfo`
--
ALTER TABLE `eduinfo`
  ADD CONSTRAINT `eduinfo_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`classroomIdentity`) REFERENCES `classroom` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
