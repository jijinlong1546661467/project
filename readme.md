# git 是什么

集中式版本控制系统（cvcs）=》svn
分布式版本控制系统（dvcs）=》git

# git 的作用

1. 在项目开发的进程中，对值得记录的时间节点进行“备份”方便后期恢复（后悔药）
2. 方便团队协作开发

# **git管理文件的三种状态**

Git有三种状态： 

1. 已修改（modified）：表示修改(新增/更新/修改/删除)了文件，但还没保存到数据库中。
2. 已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
3. 已提交（committed）：表示数据已经安全地保存在本地数据库中。

这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。



# 初次运行Git前的配置

#### 配置用户名和邮箱：

git config --global user.name "jijinlong"

git config --global user.email 1546661467@qq.com

#### 查看所有的配置以及它们所在的文件

git config --list --show-origin

#### **检查配置信息**

如果想要检查你的配置，可以使用 git config --list 命令来列出所有 Git 当时能找到的配置

# **Git** **基础**

#### **获取** **Git** **仓库**（repo）

自行初始化git仓库（git init）

克隆远程(服务器)  仓库(git clone [clone url])



U(untracked)  未跟踪(新增)
A(added)   将单个文件添加到暂存区
M(modified)  跟踪后被修改



# 创建快照(备份)

git add		将所有文件放到暂存区（经常做的）

git commit -m "提交的信息"   将暂存区文件提交到仓库（某个功能完成的时候/必要时提交）



1. [工作区]	→	git add .	[暂存区]	 → 	git commit -m "xxxx"	[repo]
2. [工作区]	 → 	git commit -a -m "xxxx"	[repo] (vim编辑器操作)
3. [工作区]	 返回	[暂存区]	 返回 	[repo]



^代表一次，或者直接用id回滚

HEAD表示当前版本，HEAD^表示当前版本的上一个版本，HEAD~n表示当前版本的上n个版本

1. git reset --soft commit_id/HEAD^  	将指定版本的内容回退到暂存区
2. git reset --hard commit_id 				将指定版本的内容删除
3. git reset commit_id （默认参数）将指定版本回退到工作区
4. [repo]		git reset --soft commit_id/HEAD^		[暂存区]
5. [repo]		git reset commit_id 		[工作区]
6. [repo]		git reset --hard commit_id 	[移除]



把第三次提交回炉重做