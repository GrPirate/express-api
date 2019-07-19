# express-api


# 阿里云nginx配置更新

1. 链接阿里云服务器

```
ssh root@47.105.189.200
```

2. 进入nginx配置目录

```
cd /usr/local/nginx/conf
```

3. 编辑nginx.conf

```
vi nginx.conf
// 开始编辑
i
// 退出编辑 按 `Esc`键输入如下指令保存退出
:wq
```

4. 重新加载nginx配置

```
/usr/local/nginx/sbin/nginx -s reload
/usr/local/nginx/sbin/nginx -s reopen
```
